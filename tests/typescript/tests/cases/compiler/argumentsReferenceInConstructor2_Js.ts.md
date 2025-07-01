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
        "name": "A",
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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 81
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 85
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 88,
                    "end": 90
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 90
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
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Literal",
                          "value": "arguments",
                          "raw": "\"arguments\"",
                          "start": 131,
                          "end": 142
                        },
                        "optional": false,
                        "computed": true,
                        "start": 126,
                        "end": 143
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 149
                      },
                      "start": 126,
                      "end": 149
                    },
                    "directive": null,
                    "start": 126,
                    "end": 150
                  }
                ],
                "start": 92,
                "end": 153
              },
              "expression": false,
              "start": 81,
              "end": 153
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 153
          }
        ],
        "start": 8,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
