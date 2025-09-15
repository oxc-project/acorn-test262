__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "typeParameters": null,
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 52
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 63,
                              "end": 69
                            },
                            "start": 61,
                            "end": 69
                          },
                          "start": 60,
                          "end": 69
                        },
                        "readonly": false,
                        "static": false,
                        "start": 53,
                        "end": 69
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 81,
                              "end": 87
                            },
                            "start": 79,
                            "end": 87
                          },
                          "start": 78,
                          "end": 87
                        },
                        "readonly": false,
                        "static": false,
                        "start": 71,
                        "end": 87
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 89,
                      "end": 92
                    },
                    "expression": false,
                    "start": 52,
                    "end": 92
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 41,
                  "end": 92
                }
              ],
              "start": 31,
              "end": 98
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 98
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 128
                      },
                      "start": 121,
                      "end": 128
                    },
                    "start": 115,
                    "end": 128
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 134
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 136,
                          "end": 137
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 133,
                        "end": 137
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 142,
                          "end": 143
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 139,
                        "end": 143
                      }
                    ],
                    "start": 131,
                    "end": 145
                  },
                  "definite": false,
                  "start": 115,
                  "end": 145
                }
              ],
              "declare": false,
              "start": 111,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 104,
            "end": 146
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 168
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 178
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 189
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 190,
                              "end": 191
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 193,
                              "end": 194
                            }
                          ],
                          "start": 180,
                          "end": 195
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 173,
                        "end": 195
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 200
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 211
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 212,
                              "end": 213
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 215,
                              "end": 216
                            }
                          ],
                          "start": 202,
                          "end": 217
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 197,
                        "end": 217
                      }
                    ],
                    "start": 171,
                    "end": 219
                  },
                  "definite": false,
                  "start": 163,
                  "end": 219
                }
              ],
              "declare": false,
              "start": 159,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 152,
            "end": 220
          }
        ],
        "start": 12,
        "end": 222
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
