__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 226,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 94,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 94,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 94,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 87,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 68,
                      "end": 86,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 79,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 86,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 135,
                    "end": 155,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 135,
                      "end": 154,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 135,
                        "end": 146,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 146,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 154,
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 124,
                  "decorators": [],
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    }
                  }
                }
              ],
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
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
