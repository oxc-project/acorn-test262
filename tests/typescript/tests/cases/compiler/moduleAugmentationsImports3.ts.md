__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                },
                "start": 17,
                "end": 25
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 16,
              "end": 26
            }
          ],
          "start": 15,
          "end": 27
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "C",
        "raw": "\"C\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 37
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    },
                    "start": 37,
                    "end": 45
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 36,
                  "end": 46
                }
              ],
              "start": 35,
              "end": 48
            },
            "abstract": false,
            "declare": false,
            "start": 25,
            "end": 48
          }
        ],
        "start": 19,
        "end": 50
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "D",
        "raw": "\"D\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "importKind": "value",
                "start": 33,
                "end": 34
              }
            ],
            "source": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 41,
              "end": 44
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 25,
            "end": 45
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "importKind": "value",
                "start": 58,
                "end": 59
              }
            ],
            "source": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 66,
              "end": 69
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 50,
            "end": 70
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 82,
              "end": 85
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 126
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 130,
                              "end": 131
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 131
                          },
                          "start": 128,
                          "end": 131
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 122,
                        "end": 132
                      }
                    ],
                    "start": 108,
                    "end": 142
                  },
                  "declare": false,
                  "start": 96,
                  "end": 142
                }
              ],
              "start": 86,
              "end": 148
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 75,
            "end": 148
          }
        ],
        "start": 19,
        "end": 150
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 151
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "importKind": "value",
          "start": 55,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 63,
        "end": 68
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 47,
      "end": 69
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 81
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 81
          },
          "importKind": "value",
          "start": 78,
          "end": 81
        }
      ],
      "source": {
        "type": "Literal",
        "value": "C",
        "raw": "\"C\"",
        "start": 88,
        "end": 91
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 70,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 105
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getCls",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 94,
          "end": 112
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 145
                },
                "start": 129,
                "end": 146
              }
            ],
            "start": 127,
            "end": 148
          },
          "expression": false,
          "start": 115,
          "end": 148
        },
        "start": 94,
        "end": 148
      },
      "directive": null,
      "start": 94,
      "end": 148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 165,
        "end": 170
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getCls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 205
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cls",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 209,
                      "end": 212
                    },
                    "start": 207,
                    "end": 212
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 199,
                  "end": 213
                }
              ],
              "start": 189,
              "end": 219
            },
            "declare": false,
            "start": 177,
            "end": 219
          }
        ],
        "start": 171,
        "end": 221
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 150,
      "end": 221
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 47,
  "end": 222
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "importKind": "value",
          "start": 39,
          "end": 40
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 47,
        "end": 52
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
      "end": 53
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "D",
        "raw": "\"D\"",
        "start": 61,
        "end": 64
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 54,
      "end": 65
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "e",
        "raw": "\"e\"",
        "start": 73,
        "end": 76
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 66,
      "end": 77
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "start": 86,
                "end": 87
              },
              "start": 84,
              "end": 87
            },
            "start": 83,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 87
        }
      ],
      "declare": false,
      "start": 79,
      "end": 88
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 103
                    },
                    "optional": false,
                    "computed": false,
                    "start": 97,
                    "end": 103
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 97,
                  "end": 105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "optional": false,
                "computed": false,
                "start": 97,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 97,
              "end": 115
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 97,
            "end": 117
          },
          "definite": false,
          "start": 93,
          "end": 117
        }
      ],
      "declare": false,
      "start": 89,
      "end": 118
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 135
                    },
                    "optional": false,
                    "computed": false,
                    "start": 127,
                    "end": 135
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 127,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 127,
                "end": 139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 151
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 151
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 127,
            "end": 153
          },
          "definite": false,
          "start": 123,
          "end": 153
        }
      ],
      "declare": false,
      "start": 119,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 154
}
```
