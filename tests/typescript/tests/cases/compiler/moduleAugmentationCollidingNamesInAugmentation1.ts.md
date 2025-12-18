__ESTREE_TEST__:AST:
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
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 59
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 69
            },
            "start": 44,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 74
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
            "body": [],
            "start": 88,
            "end": 91
          },
          "expression": false,
          "start": 77,
          "end": 91
        },
        "start": 43,
        "end": 91
      },
      "directive": null,
      "start": 43,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 108,
        "end": 122
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 142,
                  "end": 144
                }
              ],
              "start": 141,
              "end": 145
            },
            "declare": false,
            "start": 129,
            "end": 145
          }
        ],
        "start": 123,
        "end": 147
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 93,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19,
    "range": [
      9,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41,
    "range": [
      27,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 49,
    "end": 59,
    "range": [
      49,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 60,
    "end": 69,
    "range": [
      60,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85,
    "range": [
      77,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 108,
    "end": 122,
    "range": [
      108,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 129,
    "end": 138,
    "range": [
      129,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 142,
    "end": 144,
    "range": [
      142,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 59
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 69
            },
            "start": 44,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 74
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
            "body": [],
            "start": 88,
            "end": 91
          },
          "expression": false,
          "start": 77,
          "end": 91
        },
        "start": 43,
        "end": 91
      },
      "directive": null,
      "start": 43,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 108,
        "end": 122
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 142,
                  "end": 144
                }
              ],
              "start": 141,
              "end": 145
            },
            "declare": false,
            "start": 129,
            "end": 145
          }
        ],
        "start": 123,
        "end": 147
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 93,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19,
    "range": [
      9,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41,
    "range": [
      27,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 49,
    "end": 59,
    "range": [
      49,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 60,
    "end": 69,
    "range": [
      60,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85,
    "range": [
      77,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 108,
    "end": 122,
    "range": [
      108,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 129,
    "end": 138,
    "range": [
      129,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 142,
    "end": 144,
    "range": [
      142,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 31
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 32,
              "end": 33
            }
          ],
          "start": 31,
          "end": 34
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 47
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 58
                                },
                                "typeArguments": null,
                                "start": 57,
                                "end": 58
                              },
                              "start": 56,
                              "end": 58
                            },
                            "start": 55,
                            "end": 58
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          },
                          "start": 60,
                          "end": 70
                        },
                        "start": 54,
                        "end": 70
                      },
                      "start": 52,
                      "end": 70
                    },
                    "start": 48,
                    "end": 70
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 83
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
                    },
                    "start": 73,
                    "end": 86
                  },
                  "start": 71,
                  "end": 86
                },
                "body": null,
                "expression": false,
                "start": 47,
                "end": 87
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 41,
              "end": 87
            }
          ],
          "start": 35,
          "end": 89
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20,
    "range": [
      15,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 21,
    "end": 31,
    "range": [
      21,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "pred",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 73,
    "end": 83,
    "range": [
      73,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./map1",
        "raw": "\"./map1\"",
        "start": 49,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./map2",
        "raw": "\"./map2\"",
        "start": 66,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 75
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 95,
                      "end": 101
                    }
                  ],
                  "start": 94,
                  "end": 102
                },
                "start": 84,
                "end": 102
              },
              "start": 82,
              "end": 102
            },
            "start": 81,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 102
        }
      ],
      "declare": false,
      "start": 77,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19,
    "range": [
      9,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41,
    "range": [
      27,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "String",
    "value": "\"./map1\"",
    "start": 49,
    "end": 57,
    "range": [
      49,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "String",
    "value": "\"./map2\"",
    "start": 66,
    "end": 74,
    "range": [
      66,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 84,
    "end": 94,
    "range": [
      84,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  }
]
```
