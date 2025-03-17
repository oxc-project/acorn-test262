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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 94,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "x",
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
                  "name": "typeparameter2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 116,
              "name": "function1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 142,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "typeparameter1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "typeparameter2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "typeparameter3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
