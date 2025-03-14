genericClassInheritsConstructorFromNonGenericClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 17,
        "end": 25,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 97,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 95,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
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
              "start": 80,
              "end": 95,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 95,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
