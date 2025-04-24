__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 123,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 123,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 120,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 96,
                      "end": 119,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 96,
                        "end": 113,
                        "computed": true,
                        "object": {
                          "type": "ThisExpression",
                          "start": 96,
                          "end": 100
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 101,
                          "end": 112,
                          "raw": "\"arguments\"",
                          "value": "arguments"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 119,
                        "decorators": [],
                        "name": "foo",
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
                  "type": "AssignmentPattern",
                  "start": 52,
                  "end": 60,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 58,
                    "end": 60,
                    "properties": []
                  },
                  "typeAnnotation": null
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
        "end": 7,
        "decorators": [],
        "name": "A",
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
