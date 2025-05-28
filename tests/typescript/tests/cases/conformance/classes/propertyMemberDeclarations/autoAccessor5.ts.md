__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 124,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 124,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 25,
              "end": 28,
              "value": "w",
              "raw": "\"w\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 40,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 50,
              "end": 53,
              "value": "x",
              "raw": "\"x\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 64,
            "end": 91,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 81,
              "end": 84,
              "value": "y",
              "raw": "\"y\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 90,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 87,
                "end": 90
              }
            },
            "value": null,
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 96,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 113,
              "end": 116,
              "value": "z",
              "raw": "\"z\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 120,
              "end": 121,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 182,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 182,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 161,
            "end": 180,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 171,
              "end": 174,
              "callee": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 178,
              "end": 179,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
