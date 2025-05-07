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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "v"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 140,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 65,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 50,
                      "end": 64,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 57,
                        "end": 64,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 57,
                          "end": 61
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 62,
                          "end": 64,
                          "name": "v"
                        }
                      },
                      "operator": "delete",
                      "prefix": true
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
