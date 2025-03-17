__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 219,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 95,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 38,
                  "end": 89,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 49,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 49,
                    "end": 89,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
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
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 58,
                            "end": 66,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 60,
                              "end": 66
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 78,
                              "end": 84
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 86,
                      "end": 89,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 101,
            "end": 143,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 108,
              "end": 143,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 142,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 125,
                    "name": "Origin",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 120,
                        "end": 125,
                        "typeName": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 125,
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 133,
                          "end": 134,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 136,
                        "end": 140,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 139,
                          "end": 140,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 149,
            "end": 217,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 156,
              "end": 217,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 160,
                  "end": 216,
                  "id": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 165,
                    "name": "Unity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 175,
                          "name": "start",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 177,
                          "end": 192,
                          "callee": {
                            "type": "Identifier",
                            "start": 181,
                            "end": 186,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 187,
                              "end": 188,
                              "value": 0,
                              "raw": "0"
                            },
                            {
                              "type": "Literal",
                              "start": 190,
                              "end": 191,
                              "value": 0,
                              "raw": "0"
                            }
                          ],
                          "typeArguments": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 194,
                        "end": 214,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 197,
                          "name": "end",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 199,
                          "end": 214,
                          "callee": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 208,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 209,
                              "end": 210,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 212,
                              "end": 213,
                              "value": 0,
                              "raw": "0"
                            }
                          ],
                          "typeArguments": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
