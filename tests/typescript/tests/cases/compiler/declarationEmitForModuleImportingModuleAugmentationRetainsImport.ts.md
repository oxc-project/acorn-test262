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
            "decorators": [],
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 112,
                            "end": 120,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 114,
                              "end": 120
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 122,
                          "end": 131,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 123,
                            "end": 131,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 125,
                              "end": 131
                            }
                          }
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
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 176,
            "end": 198,
            "decorators": [],
            "name": "prototype",
            "optional": false,
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
                  "decorators": [],
                  "name": "ParentThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 222,
                  "end": 253,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 223,
                      "end": 232,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 224,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 226,
                          "end": 232
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 234,
                      "end": 243,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 243,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 248,
                    "end": 253,
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                }
              },
              "directive": null
            }
          ]
        },
        "expression": false
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
            "decorators": [],
            "name": "child1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "child1",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 141,
          "end": 152,
          "decorators": [],
          "name": "ParentThing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 164,
            "end": 175,
            "expression": {
              "type": "Identifier",
              "start": 164,
              "end": 175,
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 178,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 208,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 198,
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 199,
              "end": 208,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
