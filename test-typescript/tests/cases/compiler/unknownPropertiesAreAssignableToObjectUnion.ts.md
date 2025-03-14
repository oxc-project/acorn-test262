unknownPropertiesAreAssignableToObjectUnion.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 24,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 24,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 9,
                "end": 24,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 9,
                    "end": 15,
                    "typeName": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 15,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 18,
                    "end": 24
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 27,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 33,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 64,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 64,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 46,
                "end": 64,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 52,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 55,
                    "end": 64
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 67,
            "end": 75,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 73,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
