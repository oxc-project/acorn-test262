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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 240,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 240,
          "body": [
            {
              "type": "AccessorProperty",
              "start": 23,
              "end": 34,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "computed": false,
              "static": false,
              "decorators": [],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 39,
              "end": 50,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "computed": false,
              "static": false,
              "decorators": [],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 55,
              "end": 66,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "computed": false,
              "static": false,
              "decorators": [],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            },
            {
              "type": "AccessorProperty",
              "start": 72,
              "end": 83,
              "key": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "value": 0,
                "raw": "0"
              },
              "value": null,
              "computed": false,
              "static": false,
              "decorators": [],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            },
            {
              "type": "MethodDefinition",
              "start": 89,
              "end": 238,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 100,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 238,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 101,
                    "end": 113,
                    "name": "seed",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "computed": true,
                          "optional": false
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
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "name": "seed",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 167,
                                "end": 171,
                                "name": "seed",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
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
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
