__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 17,
          "end": 125,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 29,
            "end": 125,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 76,
                "end": 123,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 87,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 87,
                  "end": 123,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 91,
                    "end": 123,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 101,
                        "end": 117,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 101,
                          "end": 116,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 101,
                            "end": 107,
                            "object": {
                              "type": "ThisExpression",
                              "start": 101,
                              "end": 105
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 110,
                            "end": 116,
                            "left": {
                              "type": "Literal",
                              "start": 110,
                              "end": 112,
                              "value": 12,
                              "raw": "12"
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 115,
                              "end": 116,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
