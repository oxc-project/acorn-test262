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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 94,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 93,
                  "decorators": [],
                  "name": "typeparameter2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 142,
            "accessibility": "public",
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 142,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 136,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 129,
                      "end": 135,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 129,
                        "end": 133
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "x",
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
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 28,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 28,
              "decorators": [],
              "name": "typeparameter1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 44,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 44,
              "decorators": [],
              "name": "typeparameter2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 60,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 60,
              "decorators": [],
              "name": "typeparameter3",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
