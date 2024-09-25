import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

const CustomTreeItem = memo(styled(TreeItem)(({ theme }) => ({

    color: theme.palette.grey[200],
    [`& .${treeItemClasses.content}`]: {
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(1, 1),
        margin: theme.spacing(1, 0),
        [`& .${treeItemClasses.label}`]: {
            fontSize: '0.9rem',
            fontWeight: 500,
        },
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        padding: theme.spacing(0, 1.2),
        ...theme.applyStyles('light', {
            backgroundColor: alpha(theme.palette.primary.main, 0.6),
        }),
        ...theme.applyStyles('dark', {
            color: theme.palette.primary.contrastText,
        }),
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
    },
    ...theme.applyStyles('light', {
        color: theme.palette.grey[800],
    }),
})
));


const SidebarView = () => {

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
        <Box
            //sx={{ minHeight: 352, minWidth: 250 }}
        >
                <SimpleTreeView
                    defaultSelectedItems={activeMenu}
                    onItemClick={(event, itemId) => handleClickMenu(itemId)}
                >
                    <CustomTreeItem itemId="dashboard" label="Dashboard" />
                    <CustomTreeItem itemId="members" label="Project Members" />
                    <CustomTreeItem itemId="grid" label="Menu One" >
                        <CustomTreeItem itemId="grid-one" label="Menu One" />
                        <CustomTreeItem itemId="grid-two" label="Menu Two" />
                        <CustomTreeItem itemId="grid-three" label="Grid">
                            <CustomTreeItem itemId="pickers-community" label="Grid One" />
                            <CustomTreeItem itemId="pickers-pro" label="Grid Two" />
                        </CustomTreeItem>
                    </CustomTreeItem>

                    <CustomTreeItem itemId="charts" label="Charts">
                        <CustomTreeItem itemId="charts-community" label="Line Chart" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="tree-view" label="Tree View">
                        <CustomTreeItem itemId="tree-view-community" label="Leaf Tree" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="profile" label="Profile">
                        <CustomTreeItem itemId="charts-user" label="User" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="tree-settings" label="Company Settings">
                        <CustomTreeItem itemId="tree-view-profile" label="Company Profile" />
                    </CustomTreeItem>
                </SimpleTreeView>

        </Box>
    );
}

export default memo(SidebarView);
