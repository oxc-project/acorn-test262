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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 226,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 94,
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
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 94,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 79,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 86,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 223,
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
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 223,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 135,
                    "end": 155,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 135,
                      "end": 154,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 135,
                        "end": 146,
                        "object": {
                          "type": "ThisExpression",
                          "start": 135,
                          "end": 139
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 146,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
