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
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 79
                        },
                        "optional": false,
                        "computed": false,
                        "start": 68,
                        "end": 79
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 86
                      },
                      "optional": false,
                      "computed": false,
                      "start": 68,
                      "end": 86
                    },
                    "start": 61,
                    "end": 87
                  }
                ],
                "start": 52,
                "end": 94
              },
              "expression": false,
              "start": 49,
              "end": 94
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 39,
            "end": 94
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
              "start": 99,
              "end": 110
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
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    },
                    "start": 116,
                    "end": 124
                  },
                  "start": 111,
                  "end": 124
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
                          "start": 135,
                          "end": 139
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 146
                        },
                        "optional": false,
                        "computed": false,
                        "start": 135,
                        "end": 146
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 154
                      },
                      "start": 135,
                      "end": 154
                    },
                    "directive": null,
                    "start": 135,
                    "end": 155
                  }
                ],
                "start": 126,
                "end": 223
              },
              "expression": false,
              "start": 110,
              "end": 223
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 99,
            "end": 223
          }
        ],
        "start": 10,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 227
}
```
