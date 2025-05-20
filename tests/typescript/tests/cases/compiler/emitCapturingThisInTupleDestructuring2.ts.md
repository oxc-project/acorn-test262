__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 12,
                "end": 28,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 13,
                    "end": 19
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 21,
                    "end": 27
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 31,
            "end": 37,
            "elements": [
              {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 273,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 273,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 77,
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 98,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 110,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 271,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 271,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 174,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 123,
                      "end": 173,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 129,
                        "end": 173,
                        "operator": "=",
                        "left": {
                          "type": "ArrayPattern",
                          "start": 129,
                          "end": 164,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "start": 130,
                              "end": 139,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 130,
                                "end": 134
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 135,
                                "end": 139,
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "start": 141,
                              "end": 151,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 141,
                                "end": 145
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 151,
                                "decorators": [],
                                "name": "test1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "start": 153,
                              "end": 163,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 153,
                                "end": 157
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 163,
                                "decorators": [],
                                "name": "test2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 173,
                          "decorators": [],
                          "name": "array1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
