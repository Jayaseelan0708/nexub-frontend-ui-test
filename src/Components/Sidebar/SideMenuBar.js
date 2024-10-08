import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { animated, useSpring } from '@react-spring/web';
import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderRounded from '@mui/icons-material/FolderRounded';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import { treeItemClasses } from '@mui/x-tree-view/TreeItem';
import {
    TreeItem2Checkbox,
    TreeItem2Content,
    TreeItem2IconContainer,
    TreeItem2Label,
    TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2DragAndDropOverlay } from '@mui/x-tree-view/TreeItem2DragAndDropOverlay';
import { makeStyles } from '@mui/styles';

const MENU_LIST = [
    { id: 'dashboard', label: 'Dashboard', fileType: 'dashboard' },
    { id: 'members', label: 'Project Members', fileType: 'group' },
    {
        id: '1',
        label: 'Documents',
        children: [
            {
                id: '1.1',
                label: 'Company',
                children: [
                    { id: '1.1.1', label: 'Invoice', fileType: 'pdf' },
                    { id: '1.1.2', label: 'Meeting notes', fileType: 'doc' },
                    { id: '1.1.3', label: 'Tasks list', fileType: 'doc' },
                    { id: '1.1.4', label: 'Equipment', fileType: 'pdf' },
                    { id: '1.1.5', label: 'Video conference', fileType: 'video' },
                ],
            },
            { id: '1.2', label: 'Personal', fileType: 'folder' },
            { id: '1.3', label: 'Group photo', fileType: 'image' },
        ],
    },
    {
        id: '2',
        label: 'Bookmarked',
        fileType: 'pinned',
        children: [
            { id: '2.1', label: 'Learning materials', fileType: 'folder' },
            { id: '2.2', label: 'News', fileType: 'folder' },
            { id: '2.3', label: 'Forums', fileType: 'folder' },
            { id: '2.4', label: 'Travel documents', fileType: 'pdf' },
        ],
    },
    { id: '3', label: 'History', fileType: 'folder' },
    { id: '4', label: 'Trash', fileType: 'trash' },
];

function DotIcon() {
    return (
        <Box
            sx={{
                width: 6,
                height: 6,
                borderRadius: '70%',
                bgcolor: 'warning.main',
                display: 'inline-block',
                verticalAlign: 'middle',
                zIndex: 1,
                mx: 1,
            }}
        />
    );
}

const useStyles = makeStyles({
    scrollbar: {
        overflow: "auto",
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
            width: '0.1em',
        },
        '&::-webkit-scrollbar-track': {
            background: "#f1f1f1",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
        }
    }
})

const StyledTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
    color: theme.palette.grey[400],
    position: 'relative',
    
    ...theme.applyStyles('light', {
        color: theme.palette.grey[800],
        '&::after': {
            content: '""', // Empty content for pseudo-element
            position: 'absolute',
            top: 40,
            bottom: 5,
            left: 20,
            borderLeft: `2px solid ${alpha(theme.palette.grey[800], 0.1)}`, // Border to simulate the left border
        },

    }),
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
    flexDirection: 'row-reverse',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(0.7),
    marginTop: theme.spacing(0.7),
    marginLeft: 0,
    padding: theme.spacing(0.7),
    paddingRight: theme.spacing(1),
    fontWeight: 500,
    zIndex: 2,
    marginLeft: '-12px',


    
    
    [`&.Mui-expanded `]: {
        // [`&.content.Mui-expanded`]:{
        //     borderTopRightRadius: theme.spacing(5),
        //     borderBottomRightRadius: theme.spacing(5),
        //     backgroundColor: alpha(theme.palette.primary.main, 0.1),
        //     // borderLeft: `2px solid ${alpha(theme.palette.primary.main, 1)}`,
        //     color: '#5A5C60',
        //     fontWeight: 'bolder',
        //     ['.labelIcon']: {
        //         backgroundColor: '#2695FB',
        //         borderRadius: '50%',
        //         color: theme.palette.primary.contrastText,
        //     },
        // },
        

        '&:not(.Mui-focused, .Mui-selected, .Mui-selected.Mui-focused) .labelIcon': {
            color: theme.palette.primary.dark,
            ...theme.applyStyles('light', {
                color: theme.palette.primary.main,
            }),
        },
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            // left: '16px',
            top: '44px',
            height: 'calc(100% - 48px)',
            width: '1.5px',
            backgroundColor: theme.palette.grey[700],
            ...theme.applyStyles('light', {
                backgroundColor: theme.palette.grey[300],
            }),
            
        },

    },
    '&:hover': {
        // borderRadius: theme.spacing(5),
        borderTopRightRadius: theme.spacing(5),
        borderBottomRightRadius: theme.spacing(5),
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        borderLeft: `2px solid ${alpha(theme.palette.primary.main, 1)}`,
        color: '#2695FB',
        fontWeight: 'bolder',
        ...theme.applyStyles('light', {
            color: "#5A5C60",
            
        }),

        ['.labelIcon']: {
            backgroundColor: '#2695FB',
            borderRadius: '50%',
            color: theme.palette.primary.contrastText,
        }
    },
    [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
        // borderRadius: theme.spacing(5),
        borderTopRightRadius: theme.spacing(5),
        borderBottomRightRadius: theme.spacing(5),
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.primary.main,
        borderLeft: `2px solid ${alpha(theme.palette.primary.main, 1)}`,

        ...theme.applyStyles('light', {
            backgroundColor: alpha(theme.palette.grey[300]),

        }),
        ['.labelIcon']: {
            backgroundColor: '#2695FB',
            borderRadius: '50%',
            color: theme.palette.primary.contrastText,
        }
    },
    

}));

const AnimatedCollapse = animated(Collapse);

function TransitionComponent(props) {
    const style = useSpring({
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
        },
    });

    return <AnimatedCollapse style={style} {...props} />;
}

const StyledTreeItemLabelText = styled(Typography)({
    color: 'inherit',
    fontFamily: 'Open Sans',
    fontWeight: 500,
    fontSize: '0.9rem',
});

function CustomLabel({ icon: Icon, expandable, children, ...other }) {
    return (
        <TreeItem2Label
            {...other}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {Icon && (
                <Box
                    component={Icon}
                    className="labelIcon"
                    color="inherit"
                    sx={{ 
                        height: 30,
                        width: 30,
                        mr: 1, 
                        fontSize: '1.2rem',
                        padding: '5px',
                        
                     }}
                />
            )}

            <StyledTreeItemLabelText variant="body2">{children}</StyledTreeItemLabelText>
            {/* {expandable && <DotIcon />} */}
        </TreeItem2Label>
    );
}

const isExpandable = (reactChildren) => {
    if (Array.isArray(reactChildren)) {
        return reactChildren.length > 0 && reactChildren.some(isExpandable);
    }
    return Boolean(reactChildren);
};

const getIconFromFileType = (fileType) => {
    switch (fileType) {
        case 'dashboard': 
            return DashboardIcon;
        case 'group': 
            return GroupIcon;
        case 'image':
            return ImageIcon;
        case 'pdf':
            return PictureAsPdfIcon;
        case 'doc':
            return ArticleIcon;
        case 'video':
            return VideoCameraBackIcon;
        case 'folder':
            return FolderRounded;
        case 'pinned':
            return FolderOpenIcon;
        case 'trash':
            return DeleteIcon;
        default:
            return ArticleIcon;
    }
};

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
    const { id, itemId, label, disabled, children, ...other } = props;

    const {
        getRootProps,
        getContentProps,
        getIconContainerProps,
        getCheckboxProps,
        getLabelProps,
        getGroupTransitionProps,
        getDragAndDropOverlayProps,
        status,
        publicAPI,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

    const item = publicAPI.getItem(itemId);
    const expandable = isExpandable(children);
    let icon;
    if (expandable) {
        icon = FolderRounded;
    } else if (item.fileType) {
        icon = getIconFromFileType(item.fileType);
    }

    return (
        <TreeItem2Provider itemId={itemId}>
            <StyledTreeItemRoot {...getRootProps(other)}>
                <CustomTreeItemContent
                    {...getContentProps({
                        className: clsx('content', {
                            'Mui-expanded': status.expanded,
                            'Mui-selected': status.selected,
                            'Mui-focused': status.focused,
                            'Mui-disabled': status.disabled,
                        }),
                    })}
                    sx={{
                        borderWidth: '1px solid #DFDFDF'
                    }}
                >
                    <TreeItem2IconContainer {...getIconContainerProps()}
                        sx={{
                            backgroundColor: '#2695FB',
                            borderRadius: '50%',
                            color: '#DFDFDF',
                            fontSize: '0.6rem',
                        }}>
                        <TreeItem2Icon status={status} />
                    </TreeItem2IconContainer>
                    <TreeItem2Checkbox {...getCheckboxProps()} />
                    <CustomLabel
                        {...getLabelProps({ icon, expandable: expandable && status.expanded })}
                    />
                    <TreeItem2DragAndDropOverlay {...getDragAndDropOverlayProps()} />
                </CustomTreeItemContent>
                {children && <TransitionComponent {...getGroupTransitionProps()} />}
            </StyledTreeItemRoot>
        </TreeItem2Provider>
    );
});

// This is the root component of the Sidebar
export default function SideMenuBar() {

    const classes = useStyles();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("dashboard");

    const handleClickMenu = (id) => {
        try {
            setActiveMenu(id);
            switch (id) {
                case 'dashboard':
                    navigate("/")
                    break;
                case 'members':
                    navigate("/members")
                    break;
            }
        } catch (err) {
            console.log("Error occurred in handleClickMenu");
        }
    }

    return (
        <RichTreeView
            className={classes.scrollbar}
            items={MENU_LIST}
            defaultExpandedItems={['dashboard']}
            defaultSelectedItems="dashboard"
            sx={{ height: '100vh', flexGrow: 1, maxWidth: 400, overflowY: 'auto', paddingLeft: '12px' }}
            slots={{ item: CustomTreeItem }}
            onItemClick={(event, itemId) => handleClickMenu(itemId)}
        />
    );
}
