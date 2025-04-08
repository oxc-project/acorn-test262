__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 26,
              "name": "testProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 54,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 52,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 38,
                      "end": 51,
                      "object": {
                        "type": "ThisExpression",
                        "start": 38,
                        "end": 42
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 51,
                        "name": "testProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 127,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "name": "testProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 125,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 97,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 123,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 101,
                      "end": 122,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 114,
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 114,
                          "name": "testProp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 122,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
