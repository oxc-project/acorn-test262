__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 33,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 88,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 88,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 88,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 63,
                    "end": 82,
                    "expression": {
                      "type": "CallExpression",
                      "start": 63,
                      "end": 81,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 63,
                        "end": 71,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 63,
                          "end": 67
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 71,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 71,
                        "end": 79,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 72,
                            "end": 78
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
