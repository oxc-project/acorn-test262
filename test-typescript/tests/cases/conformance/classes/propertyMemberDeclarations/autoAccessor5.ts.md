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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 124,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 35,
            "key": {
              "type": "Literal",
              "start": 25,
              "end": 28,
              "value": "w",
              "raw": "\"w\""
            },
            "value": null,
            "computed": true,
            "static": false,
            "decorators": [],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 40,
            "end": 59,
            "key": {
              "type": "Literal",
              "start": 50,
              "end": 53,
              "value": "x",
              "raw": "\"x\""
            },
            "value": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 64,
            "end": 91,
            "key": {
              "type": "Literal",
              "start": 81,
              "end": 84,
              "value": "y",
              "raw": "\"y\""
            },
            "value": null,
            "computed": true,
            "static": true,
            "decorators": [],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 96,
            "end": 122,
            "key": {
              "type": "Literal",
              "start": 113,
              "end": 116,
              "value": "z",
              "raw": "\"z\""
            },
            "value": {
              "type": "Literal",
              "start": 120,
              "end": 121,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 182,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 161,
            "end": 180,
            "key": {
              "type": "CallExpression",
              "start": 171,
              "end": 174,
              "callee": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 178,
              "end": 179,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
