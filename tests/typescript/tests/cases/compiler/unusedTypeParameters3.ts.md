__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 144,
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
        "end": 61,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 60,
              "decorators": [],
              "name": "typeparameter3",
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
        "start": 62,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 94,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 93,
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
            "start": 100,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 116,
              "decorators": [],
              "name": "function1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 142,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 136,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 129,
                      "end": 135,
                      "object": {
                        "type": "ThisExpression",
                        "start": 129,
                        "end": 133
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
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
