decoratorOnClassMethod8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 70,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 54,
                "end": 58,
                "expression": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 58,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 65,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 70,
                "body": []
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
        "start": 46,
        "end": 47,
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
