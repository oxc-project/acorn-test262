__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 142,
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
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "v"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 140,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 140,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 65,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 50,
                      "end": 64,
                      "operator": "delete",
                      "argument": {
                        "type": "MemberExpression",
                        "start": 57,
                        "end": 64,
                        "object": {
                          "type": "ThisExpression",
                          "start": 57,
                          "end": 61
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 64,
                          "name": "v"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "prefix": true
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
