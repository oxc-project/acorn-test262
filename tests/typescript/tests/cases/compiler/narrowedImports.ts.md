__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 36,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 36,
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 38,
      "end": 56,
      "declaration": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 93,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 93,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 92,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 74,
                  "end": 92,
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
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 57,
        "end": 59,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 60,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 23,
            "end": 25,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 38,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 47,
          "end": 54,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 65,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 79,
        "end": 93,
        "expression": {
          "type": "Literal",
          "start": 87,
          "end": 92,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 110,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 112,
      "end": 127,
      "test": {
        "type": "Identifier",
        "start": 116,
        "end": 118,
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 120,
        "end": 127,
        "expression": {
          "type": "AssignmentExpression",
          "start": 120,
          "end": 126,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 128,
      "end": 143,
      "test": {
        "type": "Identifier",
        "start": 132,
        "end": 134,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 136,
        "end": 143,
        "expression": {
          "type": "AssignmentExpression",
          "start": 136,
          "end": 142,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 144,
      "end": 159,
      "test": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 152,
        "end": 159,
        "expression": {
          "type": "AssignmentExpression",
          "start": 152,
          "end": 158,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 160,
      "end": 175,
      "test": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "decorators": [],
        "name": "b0",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 168,
        "end": 175,
        "expression": {
          "type": "AssignmentExpression",
          "start": 168,
          "end": 174,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 176,
      "end": 191,
      "test": {
        "type": "Identifier",
        "start": 180,
        "end": 182,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 184,
        "end": 191,
        "expression": {
          "type": "AssignmentExpression",
          "start": 184,
          "end": 190,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 188,
            "end": 190,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
