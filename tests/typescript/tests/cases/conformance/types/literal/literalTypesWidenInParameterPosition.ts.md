__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "noWiden",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 30
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 33,
              "end": 34
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 14,
            "end": 34
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
              "start": 39,
              "end": 50
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
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "widen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 65
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 68,
                      "end": 69
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 69
                  },
                  "readonly": true,
                  "static": false,
                  "start": 51,
                  "end": 69
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
                          "start": 81,
                          "end": 85
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "noWiden",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 93
                        },
                        "optional": false,
                        "computed": false,
                        "start": 81,
                        "end": 93
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 96,
                        "end": 97
                      },
                      "start": 81,
                      "end": 97
                    },
                    "directive": null,
                    "start": 81,
                    "end": 98
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
                          "start": 116,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "widen",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 116,
                        "end": 126
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 129,
                        "end": 130
                      },
                      "start": 116,
                      "end": 130
                    },
                    "directive": null,
                    "start": 116,
                    "end": 131
                  }
                ],
                "start": 71,
                "end": 143
              },
              "expression": false,
              "start": 50,
              "end": 143
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 39,
            "end": 143
          }
        ],
        "start": 8,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 152,
            "end": 153
          }
        ],
        "start": 146,
        "end": 154
      },
      "directive": null,
      "start": 146,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
