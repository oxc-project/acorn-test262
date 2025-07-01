__ESTREE_TEST__:PASS:
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
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 23,
              "end": 34
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 39,
              "end": 50
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 55,
              "end": 66
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 81,
                "end": 82
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 72,
              "end": 83
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 100
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
                    "name": "seed",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      },
                      "start": 105,
                      "end": 113
                    },
                    "start": 101,
                    "end": 113
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
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 130,
                            "end": 133
                          },
                          "optional": false,
                          "computed": true,
                          "start": 125,
                          "end": 134
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 142
                            }
                          ],
                          "start": 137,
                          "end": 143
                        },
                        "start": 125,
                        "end": 143
                      },
                      "directive": null,
                      "start": 125,
                      "end": 144
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 158,
                            "end": 161
                          },
                          "optional": false,
                          "computed": true,
                          "start": 153,
                          "end": 162
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 167,
                                "end": 171
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 167,
                                "end": 171
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 167,
                              "end": 171
                            }
                          ],
                          "start": 165,
                          "end": 173
                        },
                        "start": 153,
                        "end": 173
                      },
                      "directive": null,
                      "start": 153,
                      "end": 174
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 183,
                            "end": 187
                          },
                          "property": {
                            "type": "Literal",
                            "value": "z",
                            "raw": "'z'",
                            "start": 188,
                            "end": 191
                          },
                          "optional": false,
                          "computed": true,
                          "start": 183,
                          "end": 192
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 195,
                              "end": 198
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 202,
                              "end": 204
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 202
                            }
                          ],
                          "start": 195,
                          "end": 204
                        },
                        "start": 183,
                        "end": 204
                      },
                      "directive": null,
                      "start": 183,
                      "end": 205
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 220,
                            "end": 221
                          },
                          "optional": false,
                          "computed": true,
                          "start": 215,
                          "end": 222
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 230
                            }
                          ],
                          "start": 225,
                          "end": 231
                        },
                        "start": 215,
                        "end": 231
                      },
                      "directive": null,
                      "start": 215,
                      "end": 232
                    }
                  ],
                  "start": 115,
                  "end": 238
                },
                "expression": false,
                "start": 100,
                "end": 238
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 89,
              "end": 238
            }
          ],
          "start": 17,
          "end": 240
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 240
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
