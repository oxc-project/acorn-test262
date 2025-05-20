__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 85,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
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
              "start": 22,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 83,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 59,
                    "end": 80,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 59,
                      "end": 79,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 59,
                        "end": 67,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 59,
                          "end": 63
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 64,
                          "end": 67,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 79,
                        "decorators": [],
                        "name": "arguments",
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
