propertyOverridesAccessors4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 46,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "sound",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 46,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 40,
                  "end": 46
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 73,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "sound",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 60,
              "end": 73,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 72,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 20,
        "decorators": [],
        "name": "Animal",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 123,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 113,
              "decorators": [],
              "name": "sound",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 116,
              "end": 123,
              "raw": "'RAWR!'",
              "value": "RAWR!"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "decorators": [],
        "name": "Lion",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 95,
        "end": 101,
        "decorators": [],
        "name": "Animal",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
