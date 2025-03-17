__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 240,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 240,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 240,
          "body": [
            {
              "type": "AccessorProperty",
              "start": 23,
              "end": 34,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "AccessorProperty",
              "start": 39,
              "end": 50,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "AccessorProperty",
              "start": 55,
              "end": 66,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "AccessorProperty",
              "start": 72,
              "end": 83,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "raw": "0",
                "value": 0
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 238,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 100,
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
                "start": 100,
                "end": 238,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 115,
                  "end": 238,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 125,
                      "end": 144,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 125,
                        "end": 143,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 134,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 130,
                            "end": 133,
                            "raw": "'x'",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 137,
                          "end": 143,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 138,
                              "end": 142,
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 153,
                      "end": 174,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 153,
                        "end": 173,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 153,
                          "end": 162,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 158,
                            "end": 161,
                            "raw": "'y'",
                            "value": "y"
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 165,
                          "end": 173,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 167,
                              "end": 171,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 183,
                      "end": 205,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 183,
                        "end": 204,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 192,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 183,
                            "end": 187
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 188,
                            "end": 191,
                            "raw": "'z'",
                            "value": "z"
                          }
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "start": 195,
                          "end": 204,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 198,
                              "end": 202,
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 195,
                              "end": 198,
                              "tail": false,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 202,
                              "end": 204,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 215,
                      "end": 232,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 215,
                        "end": 231,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 215,
                          "end": 222,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 220,
                            "end": 221,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 225,
                          "end": 231,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 226,
                              "end": 230,
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null
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
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 101,
                    "end": 113,
                    "decorators": [],
                    "name": "seed",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      }
                    }
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
