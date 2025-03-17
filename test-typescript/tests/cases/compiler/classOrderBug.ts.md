__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 90,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 62,
                    "end": 83,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 62,
                      "end": 82,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 62,
                        "end": 70,
                        "object": {
                          "type": "ThisExpression",
                          "start": 62,
                          "end": 66
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 70,
                          "name": "baz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 73,
                        "end": 82,
                        "callee": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 80,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 107,
        "body": []
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
      "start": 108,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 132,
        "body": []
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
