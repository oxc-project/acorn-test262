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
          "start": 29,
          "end": 32
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 39,
              "end": 41
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 46,
              "end": 48
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 53,
              "end": 55
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 65,
                "end": 66
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 65,
              "end": 67
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
                "start": 73,
                "end": 84
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
                        "start": 91,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "start": 85,
                    "end": 97
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
                            "start": 109,
                            "end": 113
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 114,
                            "end": 117
                          },
                          "optional": false,
                          "computed": true,
                          "start": 109,
                          "end": 118
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
                              "start": 122,
                              "end": 126
                            }
                          ],
                          "start": 121,
                          "end": 127
                        },
                        "start": 109,
                        "end": 127
                      },
                      "directive": null,
                      "start": 109,
                      "end": 128
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
                            "start": 137,
                            "end": 141
                          },
                          "property": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 142,
                            "end": 145
                          },
                          "optional": false,
                          "computed": true,
                          "start": 137,
                          "end": 146
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
                                "start": 151,
                                "end": 155
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 151,
                                "end": 155
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 151,
                              "end": 155
                            }
                          ],
                          "start": 149,
                          "end": 157
                        },
                        "start": 137,
                        "end": 157
                      },
                      "directive": null,
                      "start": 137,
                      "end": 158
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
                            "start": 167,
                            "end": 171
                          },
                          "property": {
                            "type": "Literal",
                            "value": "z",
                            "raw": "'z'",
                            "start": 172,
                            "end": 175
                          },
                          "optional": false,
                          "computed": true,
                          "start": 167,
                          "end": 176
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
                              "start": 179,
                              "end": 182
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 186,
                              "end": 188
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 186
                            }
                          ],
                          "start": 179,
                          "end": 188
                        },
                        "start": 167,
                        "end": 188
                      },
                      "directive": null,
                      "start": 167,
                      "end": 189
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
                            "start": 199,
                            "end": 203
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 204,
                            "end": 205
                          },
                          "optional": false,
                          "computed": true,
                          "start": 199,
                          "end": 206
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
                              "start": 210,
                              "end": 214
                            }
                          ],
                          "start": 209,
                          "end": 215
                        },
                        "start": 199,
                        "end": 215
                      },
                      "directive": null,
                      "start": 199,
                      "end": 216
                    }
                  ],
                  "start": 99,
                  "end": 222
                },
                "expression": false,
                "start": 84,
                "end": 222
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 73,
              "end": 222
            }
          ],
          "start": 33,
          "end": 224
        },
        "abstract": false,
        "declare": false,
        "start": 23,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 16,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 224
}
```
