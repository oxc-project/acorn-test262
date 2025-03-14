child1.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 38,
        "raw": "'./parent'",
        "value": "./parent"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "ParentThing",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 151,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 151,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 73,
            "end": 149,
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
                  "key": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "decorators": [],
                    "name": "add",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 110,
                      "end": 142,
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
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 94,
              "decorators": [],
              "name": "ParentThing",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 56,
        "end": 66,
        "raw": "'./parent'",
        "value": "./parent"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 256,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 160,
        "end": 256,
        "async": false,
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 215,
                    "decorators": [],
                    "name": "prototype",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "decorators": [],
                    "name": "add",
                    "optional": false
                  }
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 222,
                  "end": 253,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 248,
                    "end": 253,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 175,
          "decorators": [],
          "name": "child1",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
parent.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "'./child1'",
        "value": "./child1"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "child1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 178,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 135,
        "end": 178,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 178,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 141,
          "end": 152,
          "decorators": [],
          "name": "ParentThing",
          "optional": false
        },
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
              "optional": false
            }
          }
        ],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 209,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 187,
            "end": 208,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 198,
              "decorators": [],
              "name": "ParentThing",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 199,
              "end": 208,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 186,
          "decorators": [],
          "name": "child1",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
