__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 240,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 240,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 240,
          "body": [
            {
              "type": "AccessorProperty",
              "start": 23,
              "end": 34,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 39,
              "end": 50,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 55,
              "end": 66,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
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
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 72,
              "end": 83,
              "decorators": [],
              "key": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "value": 0,
                "raw": "0"
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
              "readonly": false
            },
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 238,
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
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 238,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 115,
                  "end": 238,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 125,
                      "end": 144,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 125,
                        "end": 143,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 134,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "Literal",
                            "start": 130,
                            "end": 133,
                            "value": "x",
                            "raw": "'x'"
                          },
                          "optional": false,
                          "computed": true
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 153,
                      "end": 174,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 153,
                        "end": 173,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 153,
                          "end": 162,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Literal",
                            "start": 158,
                            "end": 161,
                            "value": "y",
                            "raw": "'y'"
                          },
                          "optional": false,
                          "computed": true
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 183,
                      "end": 205,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 183,
                        "end": 204,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 183,
                          "end": 192,
                          "object": {
                            "type": "ThisExpression",
                            "start": 183,
                            "end": 187
                          },
                          "property": {
                            "type": "Literal",
                            "start": 188,
                            "end": 191,
                            "value": "z",
                            "raw": "'z'"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "start": 195,
                          "end": 204,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 195,
                              "end": 198,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 202,
                              "end": 204,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
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
                          ]
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 215,
                      "end": 232,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 215,
                        "end": 231,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 215,
                          "end": 222,
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "property": {
                            "type": "Literal",
                            "start": 220,
                            "end": 221,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
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
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
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
