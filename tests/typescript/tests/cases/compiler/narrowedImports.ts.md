__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 27,
                    "end": 36
                  }
                ],
                "start": 18,
                "end": 36
              },
              "start": 16,
              "end": 36
            },
            "start": 14,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "exportKind": "value",
      "start": 38,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 83,
                      "end": 92
                    }
                  ],
                  "start": 74,
                  "end": 92
                },
                "start": 72,
                "end": 92
              },
              "start": 70,
              "end": 92
            },
            "init": null,
            "definite": false,
            "start": 70,
            "end": 92
          }
        ],
        "declare": false,
        "start": 64,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 57,
        "end": 59
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 37,
      "end": 59
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 70
      },
      "start": 60,
      "end": 71
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 9
          },
          "start": 7,
          "end": 9
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 15
          },
          "importKind": "value",
          "start": 13,
          "end": 15
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 25
          },
          "importKind": "value",
          "start": 17,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 33,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 54
          },
          "start": 47,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 60,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 66
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./b",
          "raw": "\"./b\"",
          "start": 87,
          "end": 92
        },
        "start": 79,
        "end": 93
      },
      "importKind": "value",
      "start": 67,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
            },
            "start": 100,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 109
        }
      ],
      "declare": false,
      "start": 96,
      "end": 110
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 118
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 126
          },
          "start": 120,
          "end": 126
        },
        "directive": null,
        "start": 120,
        "end": 127
      },
      "alternate": null,
      "start": 112,
      "end": 127
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 134
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 142
          },
          "start": 136,
          "end": 142
        },
        "directive": null,
        "start": 136,
        "end": 143
      },
      "alternate": null,
      "start": 128,
      "end": 143
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 150
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 158
          },
          "start": 152,
          "end": 158
        },
        "directive": null,
        "start": 152,
        "end": 159
      },
      "alternate": null,
      "start": 144,
      "end": 159
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b0",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 166
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 174
          },
          "start": 168,
          "end": 174
        },
        "directive": null,
        "start": 168,
        "end": 175
      },
      "alternate": null,
      "start": 160,
      "end": 175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 182
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 190
          },
          "start": 184,
          "end": 190
        },
        "directive": null,
        "start": 184,
        "end": 191
      },
      "alternate": null,
      "start": 176,
      "end": 191
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
