__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 19,
                "end": 28
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      },
                      "start": 33,
                      "end": 41
                    },
                    "start": 32,
                    "end": 41
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 43,
                  "end": 52
                },
                "start": 31,
                "end": 52
              },
              "start": 29,
              "end": 52
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 18,
            "end": 53
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "start": 59,
                "end": 68
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 75,
                        "end": 78
                      },
                      "start": 73,
                      "end": 78
                    },
                    "start": 72,
                    "end": 78
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  },
                  "start": 80,
                  "end": 89
                },
                "start": 71,
                "end": 89
              },
              "start": 69,
              "end": 89
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 58,
            "end": 90
          }
        ],
        "start": 12,
        "end": 111
      },
      "declare": false,
      "start": 0,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "typeArguments": null,
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "start": 117,
            "end": 121
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 131,
                    "end": 133
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 136,
                    "end": 137
                  },
                  "start": 131,
                  "end": 137
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 152
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 153,
                            "end": 159
                          },
                          "optional": false,
                          "computed": false,
                          "start": 151,
                          "end": 159
                        },
                        "start": 144,
                        "end": 160
                      }
                    ],
                    "start": 142,
                    "end": 162
                  },
                  "expression": false,
                  "start": 138,
                  "end": 162
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 130,
                "end": 162
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 169,
                    "end": 171
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 174,
                    "end": 175
                  },
                  "start": 169,
                  "end": 175
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 191
                    },
                    "optional": false,
                    "computed": false,
                    "start": 183,
                    "end": 191
                  },
                  "id": null,
                  "generator": false,
                  "start": 178,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 168,
                "end": 191
              }
            ],
            "start": 124,
            "end": 193
          },
          "definite": false,
          "start": 117,
          "end": 193
        }
      ],
      "declare": false,
      "start": 113,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
}
```
