__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 22,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "c0",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "value": "a",
              "raw": "\"a\""
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 43,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 43,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 41,
              "end": 42,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 71,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 71,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 57,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 59,
              "decorators": [],
              "name": "s0",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 62,
              "end": 70,
              "callee": {
                "type": "Identifier",
                "start": 62,
                "end": 68,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 150,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 79,
        "end": 150,
        "id": {
          "type": "Identifier",
          "start": 89,
          "end": 91,
          "decorators": [],
          "name": "T0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 92,
          "end": 150,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 98,
              "end": 111,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 110,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 104,
                  "end": 110
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 116,
              "end": 129,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 119,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 128,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 122,
                  "end": 128
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 134,
              "end": 148,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 137,
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 138,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 140,
                  "end": 147
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 151,
      "end": 247,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 158,
        "end": 247,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 172,
          "end": 174,
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 186,
            "end": 188,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 188,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 189,
          "end": 247,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 195,
              "end": 208,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 196,
                "end": 198,
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 201,
                  "end": 207
                }
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 213,
              "end": 226,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 214,
                "end": 216,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 217,
                "end": 225,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 219,
                  "end": 225
                }
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 231,
              "end": 245,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 234,
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 235,
                "end": 244,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 237,
                  "end": 244
                }
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 248,
      "end": 286,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 255,
        "end": 286,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "decorators": [],
          "name": "T2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 280,
          "end": 282,
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 283,
          "end": 286,
          "body": []
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 371,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 294,
        "end": 371,
        "id": {
          "type": "Identifier",
          "start": 307,
          "end": 309,
          "decorators": [],
          "name": "T3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 312,
          "end": 370,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 318,
              "end": 331,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 322,
                "end": 330,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 324,
                  "end": 330
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 336,
              "end": 349,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 337,
                "end": 339,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 348,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 342,
                  "end": 348
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 354,
              "end": 368,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "decorators": [],
                "name": "s0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 358,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 360,
                  "end": 367
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 2404,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "s0",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 23,
            "decorators": [],
            "name": "T0",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 23,
            "decorators": [],
            "name": "T0",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 25,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 25,
            "end": 27,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 27,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 29,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 33,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 53,
        "value": "./module",
        "raw": "\"./module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 85,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 84,
        "value": "./module",
        "raw": "\"./module\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 99,
        "end": 578,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 127,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 112,
              "end": 127,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 126,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 120,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 123,
                    "end": 126,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 152,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 139,
              "end": 152,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 145,
                  "end": 151,
                  "id": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 147,
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 150,
                    "end": 151,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 157,
            "end": 189,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 164,
              "end": 189,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 170,
                  "end": 188,
                  "id": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 183,
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 172,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 174,
                        "end": 183,
                        "exprName": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 183,
                          "decorators": [],
                          "name": "s0",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 188,
                    "decorators": [],
                    "name": "s0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 195,
            "end": 295,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 202,
              "end": 295,
              "id": {
                "type": "Identifier",
                "start": 212,
                "end": 214,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 215,
                "end": 295,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 225,
                    "end": 240,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 226,
                      "end": 230,
                      "object": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 230,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 231,
                      "end": 239,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 233,
                        "end": 239
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 249,
                    "end": 264,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 250,
                      "end": 254,
                      "object": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 254,
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 255,
                      "end": 263,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 257,
                        "end": 263
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 273,
                    "end": 289,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 274,
                      "end": 278,
                      "object": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 278,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 279,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 281,
                        "end": 288
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 300,
            "end": 418,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 307,
              "end": 418,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 321,
                "end": 323,
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 335,
                  "end": 337,
                  "expression": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 337,
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 338,
                "end": 418,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 348,
                    "end": 363,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 349,
                      "end": 353,
                      "object": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 350,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 353,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 356,
                        "end": 362
                      }
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 372,
                    "end": 387,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 373,
                      "end": 377,
                      "object": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 377,
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 378,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 380,
                        "end": 386
                      }
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 396,
                    "end": 412,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 397,
                      "end": 401,
                      "object": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 401,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 411,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 404,
                        "end": 411
                      }
                    },
                    "value": null,
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 423,
            "end": 465,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 430,
              "end": 465,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 444,
                "end": 446,
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 455,
                "end": 457,
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 458,
                "end": 465,
                "body": []
              },
              "abstract": false,
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 470,
            "end": 576,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 477,
              "end": 576,
              "id": {
                "type": "Identifier",
                "start": 490,
                "end": 492,
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 495,
                "end": 575,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 505,
                    "end": 520,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 506,
                      "end": 510,
                      "object": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 507,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 510,
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 511,
                      "end": 519,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 513,
                        "end": 519
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 529,
                    "end": 544,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 530,
                      "end": 534,
                      "object": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 531,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 534,
                        "decorators": [],
                        "name": "c3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 535,
                      "end": 543,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 537,
                        "end": 543
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 553,
                    "end": 569,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 554,
                      "end": 558,
                      "object": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 555,
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 558,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 559,
                      "end": 568,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 561,
                        "end": 568
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 580,
      "end": 602,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 587,
        "end": 602,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 593,
            "end": 601,
            "id": {
              "type": "Identifier",
              "start": 593,
              "end": 595,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 598,
              "end": 601,
              "value": "a",
              "raw": "\"a\""
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 603,
      "end": 623,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 610,
        "end": 623,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 616,
            "end": 622,
            "id": {
              "type": "Identifier",
              "start": 616,
              "end": 618,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 621,
              "end": 622,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 624,
      "end": 656,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 631,
        "end": 656,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 637,
            "end": 655,
            "id": {
              "type": "Identifier",
              "start": 637,
              "end": 650,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 639,
                "end": 650,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 641,
                  "end": 650,
                  "exprName": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 650,
                    "decorators": [],
                    "name": "s0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 653,
              "end": 655,
              "decorators": [],
              "name": "s0",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 658,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 670,
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 671,
        "end": 729,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 677,
            "end": 690,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 678,
              "end": 680,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 689,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 683,
                "end": 689
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 695,
            "end": 708,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 698,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 707,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 701,
                "end": 707
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 713,
            "end": 727,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 716,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 726,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 719,
                "end": 726
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 730,
      "end": 819,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 744,
        "end": 746,
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 758,
          "end": 760,
          "expression": {
            "type": "Identifier",
            "start": 758,
            "end": 760,
            "decorators": [],
            "name": "T8",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 761,
        "end": 819,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 767,
            "end": 780,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 770,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 771,
              "end": 779,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 773,
                "end": 779
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 785,
            "end": 798,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 788,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 789,
              "end": 797,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 791,
                "end": 797
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 803,
            "end": 817,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 804,
              "end": 806,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 807,
              "end": 816,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 809,
                "end": 816
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 820,
      "end": 852,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 834,
        "end": 837,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 846,
        "end": 848,
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 849,
        "end": 852,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 853,
      "end": 931,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 869,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 872,
        "end": 930,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 878,
            "end": 891,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 879,
              "end": 881,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 882,
              "end": 890,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 884,
                "end": 890
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 896,
            "end": 909,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 900,
              "end": 908,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 902,
                "end": 908
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 914,
            "end": 928,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 915,
              "end": 917,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 918,
              "end": 927,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 920,
                "end": 927
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 933,
      "end": 999,
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 946,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 947,
        "end": 999,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 953,
            "end": 963,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 953,
              "end": 954,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 962,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 956,
                "end": 962
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 968,
            "end": 978,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 968,
              "end": 969,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 977,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 971,
                "end": 977
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 983,
            "end": 997,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 984,
              "end": 986,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 987,
              "end": 996,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 989,
                "end": 996
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1000,
      "end": 1084,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1017,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1029,
          "end": 1031,
          "expression": {
            "type": "Identifier",
            "start": 1029,
            "end": 1031,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 1032,
        "end": 1084,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1038,
            "end": 1048,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1038,
              "end": 1039,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1039,
              "end": 1047,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1041,
                "end": 1047
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1053,
            "end": 1063,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 1053,
              "end": 1054,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1062,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1056,
                "end": 1062
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1068,
            "end": 1082,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1069,
              "end": 1071,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1072,
              "end": 1081,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1074,
                "end": 1081
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1085,
      "end": 1118,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1099,
        "end": 1102,
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1111,
        "end": 1114,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1115,
        "end": 1118,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1119,
      "end": 1191,
      "id": {
        "type": "Identifier",
        "start": 1132,
        "end": 1135,
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1138,
        "end": 1190,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1144,
            "end": 1154,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1144,
              "end": 1145,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1145,
              "end": 1153,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1147,
                "end": 1153
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1159,
            "end": 1169,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1159,
              "end": 1160,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1160,
              "end": 1168,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1162,
                "end": 1168
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1174,
            "end": 1188,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1175,
              "end": 1177,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1178,
              "end": 1187,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1180,
                "end": 1187
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1193,
      "end": 1282,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1208,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1209,
        "end": 1282,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1215,
            "end": 1232,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1222,
              "end": 1223,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1223,
              "end": 1231,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1225,
                "end": 1231
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1237,
            "end": 1254,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 1244,
              "end": 1245,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1245,
              "end": 1253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1247,
                "end": 1253
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1259,
            "end": 1280,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1267,
              "end": 1269,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1270,
              "end": 1279,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1272,
                "end": 1279
              }
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1284,
      "end": 1295,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1288,
          "end": 1294,
          "id": {
            "type": "Identifier",
            "start": 1288,
            "end": 1294,
            "decorators": [],
            "name": "t0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1290,
              "end": 1294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1292,
                "end": 1294,
                "typeName": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1294,
                  "decorators": [],
                  "name": "T0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1296,
      "end": 1307,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1300,
          "end": 1306,
          "id": {
            "type": "Identifier",
            "start": 1300,
            "end": 1306,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1302,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1304,
                "end": 1306,
                "typeName": {
                  "type": "Identifier",
                  "start": 1304,
                  "end": 1306,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1308,
      "end": 1319,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1312,
          "end": 1318,
          "id": {
            "type": "Identifier",
            "start": 1312,
            "end": 1318,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1314,
              "end": 1318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1316,
                "end": 1318,
                "typeName": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1318,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1320,
      "end": 1331,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1324,
          "end": 1330,
          "id": {
            "type": "Identifier",
            "start": 1324,
            "end": 1330,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1326,
              "end": 1330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1328,
                "end": 1330,
                "typeName": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1330,
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1332,
      "end": 1347,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1336,
          "end": 1346,
          "id": {
            "type": "Identifier",
            "start": 1336,
            "end": 1346,
            "decorators": [],
            "name": "t0_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1340,
              "end": 1346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1342,
                "end": 1346,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1342,
                  "end": 1346,
                  "left": {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1343,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1346,
                    "decorators": [],
                    "name": "T0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1348,
      "end": 1363,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1352,
          "end": 1362,
          "id": {
            "type": "Identifier",
            "start": 1352,
            "end": 1362,
            "decorators": [],
            "name": "t1_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1356,
              "end": 1362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1358,
                "end": 1362,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1358,
                  "end": 1362,
                  "left": {
                    "type": "Identifier",
                    "start": 1358,
                    "end": 1359,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1360,
                    "end": 1362,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1364,
      "end": 1379,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1368,
          "end": 1378,
          "id": {
            "type": "Identifier",
            "start": 1368,
            "end": 1378,
            "decorators": [],
            "name": "t2_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1372,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1374,
                "end": 1378,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1374,
                  "end": 1378,
                  "left": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1375,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1376,
                    "end": 1378,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1380,
      "end": 1395,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1384,
          "end": 1394,
          "id": {
            "type": "Identifier",
            "start": 1384,
            "end": 1394,
            "decorators": [],
            "name": "t3_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1388,
              "end": 1394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1390,
                "end": 1394,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1390,
                  "end": 1394,
                  "left": {
                    "type": "Identifier",
                    "start": 1390,
                    "end": 1391,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1392,
                    "end": 1394,
                    "decorators": [],
                    "name": "T3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1396,
      "end": 1409,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1400,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1400,
            "end": 1408,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1402,
              "end": 1408,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1404,
                "end": 1408,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1404,
                  "end": 1408,
                  "left": {
                    "type": "Identifier",
                    "start": 1404,
                    "end": 1405,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1406,
                    "end": 1408,
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1410,
      "end": 1423,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1414,
          "end": 1422,
          "id": {
            "type": "Identifier",
            "start": 1414,
            "end": 1422,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1416,
              "end": 1422,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1418,
                "end": 1422,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1418,
                  "end": 1422,
                  "left": {
                    "type": "Identifier",
                    "start": 1418,
                    "end": 1419,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1420,
                    "end": 1422,
                    "decorators": [],
                    "name": "T5",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1424,
      "end": 1437,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1428,
          "end": 1436,
          "id": {
            "type": "Identifier",
            "start": 1428,
            "end": 1436,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1430,
              "end": 1436,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1432,
                "end": 1436,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1432,
                  "end": 1436,
                  "left": {
                    "type": "Identifier",
                    "start": 1432,
                    "end": 1433,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1434,
                    "end": 1436,
                    "decorators": [],
                    "name": "T6",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1438,
      "end": 1451,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1442,
          "end": 1450,
          "id": {
            "type": "Identifier",
            "start": 1442,
            "end": 1450,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1444,
              "end": 1450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1446,
                "end": 1450,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1446,
                  "end": 1450,
                  "left": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1447,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1450,
                    "decorators": [],
                    "name": "T7",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1452,
      "end": 1463,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1456,
          "end": 1462,
          "id": {
            "type": "Identifier",
            "start": 1456,
            "end": 1462,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1458,
              "end": 1462,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1460,
                "end": 1462,
                "typeName": {
                  "type": "Identifier",
                  "start": 1460,
                  "end": 1462,
                  "decorators": [],
                  "name": "T8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1464,
      "end": 1475,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1468,
          "end": 1474,
          "id": {
            "type": "Identifier",
            "start": 1468,
            "end": 1474,
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1470,
              "end": 1474,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1472,
                "end": 1474,
                "typeName": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1474,
                  "decorators": [],
                  "name": "T9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1476,
      "end": 1489,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1480,
          "end": 1488,
          "id": {
            "type": "Identifier",
            "start": 1480,
            "end": 1488,
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1483,
              "end": 1488,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1485,
                "end": 1488,
                "typeName": {
                  "type": "Identifier",
                  "start": 1485,
                  "end": 1488,
                  "decorators": [],
                  "name": "T10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1490,
      "end": 1503,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1494,
          "end": 1502,
          "id": {
            "type": "Identifier",
            "start": 1494,
            "end": 1502,
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1497,
              "end": 1502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1499,
                "end": 1502,
                "typeName": {
                  "type": "Identifier",
                  "start": 1499,
                  "end": 1502,
                  "decorators": [],
                  "name": "T11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1504,
      "end": 1517,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1508,
          "end": 1516,
          "id": {
            "type": "Identifier",
            "start": 1508,
            "end": 1516,
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1511,
              "end": 1516,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1513,
                "end": 1516,
                "typeName": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1516,
                  "decorators": [],
                  "name": "T12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1518,
      "end": 1531,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1522,
          "end": 1530,
          "id": {
            "type": "Identifier",
            "start": 1522,
            "end": 1530,
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1525,
              "end": 1530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1527,
                "end": 1530,
                "typeName": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1530,
                  "decorators": [],
                  "name": "T13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1532,
      "end": 1545,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1536,
          "end": 1544,
          "id": {
            "type": "Identifier",
            "start": 1536,
            "end": 1544,
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1539,
              "end": 1544,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1541,
                "end": 1544,
                "typeName": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1544,
                  "decorators": [],
                  "name": "T14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1546,
      "end": 1559,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1550,
          "end": 1558,
          "id": {
            "type": "Identifier",
            "start": 1550,
            "end": 1558,
            "decorators": [],
            "name": "t15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1553,
              "end": 1558,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1555,
                "end": 1558,
                "typeName": {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1558,
                  "decorators": [],
                  "name": "T15",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 1578,
      "end": 1685,
      "expression": {
        "type": "SequenceExpression",
        "start": 1578,
        "end": 1684,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1578,
            "end": 1585,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1578,
              "end": 1580,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1583,
              "end": 1585,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1587,
            "end": 1594,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1587,
              "end": 1589,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1592,
              "end": 1594,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1596,
            "end": 1603,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1596,
              "end": 1598,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1601,
              "end": 1603,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1605,
            "end": 1612,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1605,
              "end": 1607,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1610,
              "end": 1612,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1614,
            "end": 1621,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1614,
              "end": 1616,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1619,
              "end": 1621,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1623,
            "end": 1630,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1623,
              "end": 1625,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1628,
              "end": 1630,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1632,
            "end": 1639,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1632,
              "end": 1634,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1637,
              "end": 1639,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1641,
            "end": 1648,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1641,
              "end": 1643,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1646,
              "end": 1648,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1650,
            "end": 1657,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1650,
              "end": 1652,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1655,
              "end": 1657,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1659,
            "end": 1666,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1659,
              "end": 1661,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1664,
              "end": 1666,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1668,
            "end": 1675,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1668,
              "end": 1670,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1673,
              "end": 1675,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1677,
            "end": 1684,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1677,
              "end": 1679,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1682,
              "end": 1684,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1686,
      "end": 1793,
      "expression": {
        "type": "SequenceExpression",
        "start": 1686,
        "end": 1792,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1686,
            "end": 1693,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1686,
              "end": 1688,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1691,
              "end": 1693,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1695,
            "end": 1702,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1695,
              "end": 1697,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1700,
              "end": 1702,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1704,
            "end": 1711,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1704,
              "end": 1706,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1709,
              "end": 1711,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1713,
            "end": 1720,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1713,
              "end": 1715,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1718,
              "end": 1720,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1722,
            "end": 1729,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1722,
              "end": 1724,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1727,
              "end": 1729,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1731,
            "end": 1738,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1731,
              "end": 1733,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1736,
              "end": 1738,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1740,
            "end": 1747,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1740,
              "end": 1742,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1745,
              "end": 1747,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1749,
            "end": 1756,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1749,
              "end": 1751,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1754,
              "end": 1756,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1758,
            "end": 1765,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1758,
              "end": 1760,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1763,
              "end": 1765,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1767,
            "end": 1774,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1767,
              "end": 1769,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1772,
              "end": 1774,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1776,
            "end": 1783,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1776,
              "end": 1778,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1781,
              "end": 1783,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1785,
            "end": 1792,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1785,
              "end": 1787,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1790,
              "end": 1792,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1794,
      "end": 1873,
      "expression": {
        "type": "SequenceExpression",
        "start": 1794,
        "end": 1872,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1794,
            "end": 1802,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1794,
              "end": 1796,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1799,
              "end": 1802,
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1804,
            "end": 1812,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1804,
              "end": 1806,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1809,
              "end": 1812,
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1814,
            "end": 1822,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1814,
              "end": 1816,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1819,
              "end": 1822,
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1824,
            "end": 1832,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1824,
              "end": 1826,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1829,
              "end": 1832,
              "decorators": [],
              "name": "t15",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1834,
            "end": 1842,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1834,
              "end": 1837,
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1840,
              "end": 1842,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1844,
            "end": 1852,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1844,
              "end": 1847,
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1850,
              "end": 1852,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1854,
            "end": 1862,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1854,
              "end": 1857,
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1860,
              "end": 1862,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1864,
            "end": 1872,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1864,
              "end": 1867,
              "decorators": [],
              "name": "t15",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1870,
              "end": 1872,
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1874,
      "end": 1881,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1874,
        "end": 1880,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1874,
          "end": 1876,
          "decorators": [],
          "name": "t0",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1879,
          "end": 1880,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1917,
      "end": 1982,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1924,
        "end": 1982,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1930,
            "end": 1981,
            "id": {
              "type": "Identifier",
              "start": 1930,
              "end": 1932,
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 1935,
              "end": 1981,
              "properties": [
                {
                  "type": "Property",
                  "start": 1941,
                  "end": 1948,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1942,
                    "end": 1944,
                    "decorators": [],
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1947,
                    "end": 1948,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1954,
                  "end": 1963,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1955,
                    "end": 1957,
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1960,
                    "end": 1963,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1969,
                  "end": 1979,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1972,
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1975,
                    "end": 1979,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2014,
      "end": 2042,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2021,
        "end": 2042,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2027,
            "end": 2041,
            "id": {
              "type": "Identifier",
              "start": 2027,
              "end": 2032,
              "decorators": [],
              "name": "o1_c4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 2035,
              "end": 2041,
              "object": {
                "type": "Identifier",
                "start": 2035,
                "end": 2037,
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2038,
                "end": 2040,
                "decorators": [],
                "name": "c4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2043,
      "end": 2071,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2050,
        "end": 2071,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2056,
            "end": 2070,
            "id": {
              "type": "Identifier",
              "start": 2056,
              "end": 2061,
              "decorators": [],
              "name": "o1_c5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 2064,
              "end": 2070,
              "object": {
                "type": "Identifier",
                "start": 2064,
                "end": 2066,
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2067,
                "end": 2069,
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2072,
      "end": 2100,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2079,
        "end": 2100,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2085,
            "end": 2099,
            "id": {
              "type": "Identifier",
              "start": 2085,
              "end": 2090,
              "decorators": [],
              "name": "o1_s2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 2093,
              "end": 2099,
              "object": {
                "type": "Identifier",
                "start": 2093,
                "end": 2095,
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2096,
                "end": 2098,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2102,
      "end": 2127,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2109,
        "end": 2127,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2115,
            "end": 2126,
            "id": {
              "type": "Identifier",
              "start": 2115,
              "end": 2121,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2117,
                "end": 2121,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2119,
                  "end": 2121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2121,
                    "decorators": [],
                    "name": "T0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 2124,
              "end": 2126,
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 2206,
      "end": 2232,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2220,
          "end": 2231,
          "id": {
            "type": "Identifier",
            "start": 2220,
            "end": 2231,
            "decorators": [],
            "name": "rI",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2222,
              "end": 2231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2224,
                "end": 2231,
                "typeName": {
                  "type": "Identifier",
                  "start": 2224,
                  "end": 2226,
                  "decorators": [],
                  "name": "RI",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2226,
                  "end": 2231,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2227,
                      "end": 2230,
                      "literal": {
                        "type": "Literal",
                        "start": 2227,
                        "end": 2230,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                }
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
      "type": "ExpressionStatement",
      "start": 2233,
      "end": 2237,
      "expression": {
        "type": "MemberExpression",
        "start": 2233,
        "end": 2237,
        "object": {
          "type": "Identifier",
          "start": 2233,
          "end": 2235,
          "decorators": [],
          "name": "rI",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2236,
          "end": 2237,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2238,
      "end": 2302,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2250,
        "decorators": [],
        "name": "RI",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2250,
        "end": 2271,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2251,
            "end": 2270,
            "name": {
              "type": "Identifier",
              "start": 2251,
              "end": 2252,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 2261,
              "end": 2270,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 2261,
                  "end": 2264,
                  "literal": {
                    "type": "Literal",
                    "start": 2261,
                    "end": 2264,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2267,
                  "end": 2270,
                  "literal": {
                    "type": "Literal",
                    "start": 2267,
                    "end": 2270,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2272,
        "end": 2302,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2278,
            "end": 2283,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2278,
              "end": 2279,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2279,
              "end": 2282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2281,
                "end": 2282,
                "typeName": {
                  "type": "Identifier",
                  "start": 2281,
                  "end": 2282,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2288,
            "end": 2300,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 2289,
              "end": 2293,
              "object": {
                "type": "Identifier",
                "start": 2289,
                "end": 2291,
                "decorators": [],
                "name": "rI",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2292,
                "end": 2293,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2294,
              "end": 2299,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2296,
                "end": 2299,
                "literal": {
                  "type": "Literal",
                  "start": 2296,
                  "end": 2299,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2304,
      "end": 2330,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2318,
          "end": 2329,
          "id": {
            "type": "Identifier",
            "start": 2318,
            "end": 2329,
            "decorators": [],
            "name": "rC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2320,
              "end": 2329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2322,
                "end": 2329,
                "typeName": {
                  "type": "Identifier",
                  "start": 2322,
                  "end": 2324,
                  "decorators": [],
                  "name": "RC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2324,
                  "end": 2329,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2325,
                      "end": 2328,
                      "literal": {
                        "type": "Literal",
                        "start": 2325,
                        "end": 2328,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                }
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
      "type": "ExpressionStatement",
      "start": 2331,
      "end": 2335,
      "expression": {
        "type": "MemberExpression",
        "start": 2331,
        "end": 2335,
        "object": {
          "type": "Identifier",
          "start": 2331,
          "end": 2333,
          "decorators": [],
          "name": "rC",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2334,
          "end": 2335,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2336,
      "end": 2404,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2350,
        "end": 2352,
        "decorators": [],
        "name": "RC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2352,
        "end": 2373,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2353,
            "end": 2372,
            "name": {
              "type": "Identifier",
              "start": 2353,
              "end": 2354,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 2363,
              "end": 2372,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 2363,
                  "end": 2366,
                  "literal": {
                    "type": "Literal",
                    "start": 2363,
                    "end": 2366,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2369,
                  "end": 2372,
                  "literal": {
                    "type": "Literal",
                    "start": 2369,
                    "end": 2372,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2374,
        "end": 2404,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2380,
            "end": 2385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2380,
              "end": 2381,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2381,
              "end": 2384,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2383,
                "end": 2384,
                "typeName": {
                  "type": "Identifier",
                  "start": 2383,
                  "end": 2384,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2390,
            "end": 2402,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 2391,
              "end": 2395,
              "object": {
                "type": "Identifier",
                "start": 2391,
                "end": 2393,
                "decorators": [],
                "name": "rC",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2394,
                "end": 2395,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2396,
              "end": 2401,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2398,
                "end": 2401,
                "literal": {
                  "type": "Literal",
                  "start": 2398,
                  "end": 2401,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
