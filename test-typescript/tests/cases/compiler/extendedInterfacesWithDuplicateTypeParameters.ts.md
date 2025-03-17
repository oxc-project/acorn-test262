__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 37,
        "name": "InterfaceWithMultipleTypars",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "A",
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
            "start": 41,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "A",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 77,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 75,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 112,
        "name": "InterfaceWithSomeTypars",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "B",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 153,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 139,
            "end": 151,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 188,
        "name": "InterfaceWithSomeTypars",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "C",
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
            "start": 192,
            "end": 193,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "name": "C",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 195,
        "end": 229,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 214,
            "end": 227,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 218,
              "name": "bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
