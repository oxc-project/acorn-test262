emitClassDeclarationWithStaticPropertyAssignmentInES6.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 107,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 57,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 55,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            },
            "value": {
              "type": "Literal",
              "start": 49,
              "end": 54,
              "raw": "\"Foo\"",
              "value": "Foo"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 83,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 82,
              "raw": "20000",
              "value": 20000
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 103,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
