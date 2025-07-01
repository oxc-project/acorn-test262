__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 12,
                "end": 28
              },
              "start": 10,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 32,
                "end": 33
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 35,
                "end": 36
              }
            ],
            "start": 31,
            "end": 37
          },
          "definite": false,
          "start": 4,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 54,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              },
              "start": 77,
              "end": 82
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 72,
            "end": 83
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 88,
            "end": 99
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 110
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 130,
                                "end": 134
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 135,
                                "end": 139
                              },
                              "optional": false,
                              "computed": false,
                              "start": 130,
                              "end": 139
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 141,
                                "end": 145
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 146,
                                "end": 151
                              },
                              "optional": false,
                              "computed": false,
                              "start": 141,
                              "end": 151
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 153,
                                "end": 157
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 163
                              },
                              "optional": false,
                              "computed": false,
                              "start": 153,
                              "end": 163
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 164
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 167,
                          "end": 173
                        },
                        "start": 129,
                        "end": 173
                      },
                      "id": null,
                      "generator": false,
                      "start": 123,
                      "end": 173
                    },
                    "directive": null,
                    "start": 123,
                    "end": 174
                  }
                ],
                "start": 113,
                "end": 271
              },
              "expression": false,
              "start": 110,
              "end": 271
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 104,
            "end": 271
          }
        ],
        "start": 48,
        "end": 273
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 273
}
```
