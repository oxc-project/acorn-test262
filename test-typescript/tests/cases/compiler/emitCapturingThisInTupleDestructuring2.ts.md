emitCapturingThisInTupleDestructuring2.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 274,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 29,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 13,
                "end": 29,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 14,
                    "end": 20
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 32,
            "end": 38,
            "elements": [
              {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
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
      "start": 41,
      "end": 274,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 274,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 68,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 78,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 83,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 80,
                "end": 83
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 100,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 94,
              "decorators": [],
              "name": "test2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 272,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 272,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 272,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 175,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 124,
                      "end": 174,
                      "async": false,
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 130,
                        "end": 174,
                        "operator": "=",
                        "left": {
                          "type": "ArrayPattern",
                          "start": 130,
                          "end": 165,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "start": 131,
                              "end": 140,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 131,
                                "end": 135
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 140,
                                "decorators": [],
                                "name": "test",
                                "optional": false
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "start": 142,
                              "end": 152,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 142,
                                "end": 146
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 152,
                                "decorators": [],
                                "name": "test1",
                                "optional": false
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "start": 154,
                              "end": 164,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 154,
                                "end": 158
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 159,
                                "end": 164,
                                "decorators": [],
                                "name": "test2",
                                "optional": false
                              }
                            }
                          ],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 174,
                          "decorators": [],
                          "name": "array1",
                          "optional": false
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
