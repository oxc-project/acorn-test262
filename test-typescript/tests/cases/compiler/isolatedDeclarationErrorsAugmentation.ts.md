__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "ParentThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "ParentThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 38,
        "value": "./parent",
        "raw": "'./parent'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 151,
      "id": {
        "type": "Literal",
        "start": 56,
        "end": 66,
        "value": "./parent",
        "raw": "'./parent'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 151,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 73,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 94,
              "name": "ParentThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 95,
              "end": 149,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 105,
                  "end": 143,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 110,
                      "end": 142,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 111,
                          "end": 120,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 120,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 114,
                              "end": 120
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 122,
                          "end": 131,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 123,
                            "end": 131,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 125,
                              "end": 131
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 142,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 136,
                          "end": 142
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 256,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 160,
        "end": 256,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 175,
          "name": "child1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 176,
            "end": 198,
            "name": "prototype",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 198,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 198,
                  "name": "ParentThing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 200,
          "end": 256,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 206,
              "end": 254,
              "expression": {
                "type": "AssignmentExpression",
                "start": 206,
                "end": 253,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 219,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 215,
                    "name": "prototype",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 222,
                  "end": 253,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 223,
                      "end": 232,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 224,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 226,
                          "end": 232
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 234,
                      "end": 243,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 243,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 248,
                    "end": 253,
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 210,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "child1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "child1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "./child1",
        "raw": "'./child1'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 178,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 135,
        "end": 178,
        "id": {
          "type": "Identifier",
          "start": 141,
          "end": 152,
          "name": "ParentThing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 178,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 164,
            "end": 175,
            "expression": {
              "type": "Identifier",
              "start": 164,
              "end": 175,
              "name": "ParentThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 209,
        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 186,
          "name": "child1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 208,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 198,
              "name": "ParentThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 199,
              "end": 208,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
