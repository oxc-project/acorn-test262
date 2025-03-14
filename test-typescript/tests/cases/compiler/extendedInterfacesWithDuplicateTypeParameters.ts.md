extendedInterfacesWithDuplicateTypeParameters.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 77,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 75,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 37,
        "decorators": [],
        "name": "InterfaceWithMultipleTypars",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 43,
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
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 153,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 153,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 139,
            "end": 151,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 150,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 146,
                "end": 150
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 112,
        "decorators": [],
        "name": "InterfaceWithSomeTypars",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 229,
      "body": {
        "type": "TSInterfaceBody",
        "start": 195,
        "end": 229,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 214,
            "end": 227,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 218,
              "decorators": [],
              "name": "bar2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 226,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 222,
                "end": 226
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 188,
        "decorators": [],
        "name": "InterfaceWithSomeTypars",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 193,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "C",
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
