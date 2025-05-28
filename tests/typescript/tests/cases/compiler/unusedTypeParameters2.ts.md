__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 128,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 28,
              "decorators": [],
              "name": "typeparameter1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 44,
              "decorators": [],
              "name": "typeparameter2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 78,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 77,
                  "decorators": [],
                  "name": "typeparameter2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 100,
              "decorators": [],
              "name": "function1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 126,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 120,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 113,
                      "end": 119,
                      "object": {
                        "type": "ThisExpression",
                        "start": 113,
                        "end": 117
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
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
