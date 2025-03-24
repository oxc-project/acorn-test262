__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 219,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 219,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 95,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 95,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 38,
                  "end": 89,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 49,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 49,
                    "end": 89,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 86,
                      "end": 89,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 50,
                        "end": 66,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 66,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 58,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 60,
                              "end": 66
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 68,
                        "end": 84,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 84,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 101,
            "end": 143,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 108,
              "end": 143,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 142,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 125,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 120,
                        "end": 125,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 125,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 128,
                    "end": 142,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 130,
                        "end": 134,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 133,
                          "end": 134,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 136,
                        "end": 140,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 139,
                          "end": 140,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 149,
            "end": 217,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 156,
              "end": 217,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 160,
                  "end": 216,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 165,
                    "decorators": [],
                    "name": "Unity",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 168,
                    "end": 216,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 170,
                        "end": 192,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 175,
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "NewExpression",
                          "start": 177,
                          "end": 192,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 187,
                              "end": 188,
                              "raw": "0",
                              "value": 0
                            },
                            {
                              "type": "Literal",
                              "start": 190,
                              "end": 191,
                              "raw": "0",
                              "value": 0
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 181,
                            "end": 186,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 194,
                        "end": 214,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 197,
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "NewExpression",
                          "start": 199,
                          "end": 214,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 209,
                              "end": 210,
                              "raw": "1",
                              "value": 1
                            },
                            {
                              "type": "Literal",
                              "start": 212,
                              "end": 213,
                              "raw": "0",
                              "value": 0
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 208,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
