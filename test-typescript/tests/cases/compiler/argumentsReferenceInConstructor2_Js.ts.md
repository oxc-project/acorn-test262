__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 153,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
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
              "start": 81,
              "end": 153,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 150,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 149,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 143,
                        "computed": true,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 131,
                          "end": 142,
                          "raw": "\"arguments\"",
                          "value": "arguments"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 149,
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
                  "start": 82,
                  "end": 90,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 85,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 88,
                    "end": 90,
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
