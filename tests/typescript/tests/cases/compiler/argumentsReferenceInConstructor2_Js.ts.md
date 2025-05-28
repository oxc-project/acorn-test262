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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 153,
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
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 153,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 88,
                    "end": 90,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 150,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 149,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 143,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Literal",
                          "start": 131,
                          "end": 142,
                          "value": "arguments",
                          "raw": "\"arguments\""
                        },
                        "optional": false,
                        "computed": true
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
