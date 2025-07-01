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
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./parent",
        "raw": "'./parent'",
        "start": 28,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./parent",
        "raw": "'./parent'",
        "start": 56,
        "end": 66
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 94
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
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 108
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 114,
                              "end": 120
                            },
                            "start": 112,
                            "end": 120
                          },
                          "start": 111,
                          "end": 120
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 125,
                              "end": 131
                            },
                            "start": 123,
                            "end": 131
                          },
                          "start": 122,
                          "end": 131
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 136,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      },
                      "start": 110,
                      "end": 142
                    },
                    "start": 108,
                    "end": 142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 105,
                  "end": 143
                }
              ],
              "start": 95,
              "end": 149
            },
            "declare": false,
            "start": 73,
            "end": 149
          }
        ],
        "start": 67,
        "end": 151
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 41,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 175
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParentThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 198
                },
                "typeArguments": null,
                "start": 187,
                "end": 198
              },
              "start": 185,
              "end": 198
            },
            "start": 176,
            "end": 198
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 215
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 219
                  },
                  "optional": false,
                  "computed": false,
                  "start": 206,
                  "end": 219
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 223,
                      "end": 232
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        },
                        "start": 235,
                        "end": 243
                      },
                      "start": 234,
                      "end": 243
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "start": 248,
                    "end": 253
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 253
                },
                "start": 206,
                "end": 253
              },
              "directive": null,
              "start": 206,
              "end": 254
            }
          ],
          "start": 200,
          "end": 256
        },
        "expression": false,
        "start": 160,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 256
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
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
            "name": "child1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "child1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./child1",
        "raw": "'./child1'",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParentThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 152
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 175
            },
            "typeArguments": null,
            "start": 164,
            "end": 175
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 176,
          "end": 178
        },
        "abstract": false,
        "declare": false,
        "start": 135,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 198
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 208
            },
            "optional": false,
            "computed": false,
            "start": 187,
            "end": 208
          }
        ],
        "optional": false,
        "start": 180,
        "end": 209
      },
      "directive": null,
      "start": 180,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
