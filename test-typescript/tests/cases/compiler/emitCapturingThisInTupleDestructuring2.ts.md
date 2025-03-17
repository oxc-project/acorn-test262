__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 29,
            "name": "array1",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 274,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 78,
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 94,
              "name": "test2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 272,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 272,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "start": 130,
                        "end": 174,
                        "operator": "=",
                        "left": {
                          "type": "ArrayPattern",
                          "start": 130,
                          "end": 165,
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "start": 131,
                              "end": 140,
                              "object": {
                                "type": "ThisExpression",
                                "start": 131,
                                "end": 135
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 140,
                                "name": "test",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 142,
                              "end": 152,
                              "object": {
                                "type": "ThisExpression",
                                "start": 142,
                                "end": 146
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 152,
                                "name": "test1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "MemberExpression",
                              "start": 154,
                              "end": 164,
                              "object": {
                                "type": "ThisExpression",
                                "start": 154,
                                "end": 158
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 159,
                                "end": 164,
                                "name": "test2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 174,
                          "name": "array1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
