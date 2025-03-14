unusedTypeParameters2.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 78,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 126,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 100,
              "decorators": [],
              "name": "function1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 126,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 113,
                        "end": 117
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "decorators": [],
                        "name": "x",
                        "optional": false
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
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 28,
              "decorators": [],
              "name": "typeparameter1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 44,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 44,
              "decorators": [],
              "name": "typeparameter2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
