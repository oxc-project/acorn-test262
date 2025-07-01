__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "w",
              "raw": "\"w\"",
              "start": 25,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              },
              "start": 29,
              "end": 34
            },
            "value": null,
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 15,
            "end": 35
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 50,
              "end": 53
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 57,
              "end": 58
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 40,
            "end": 59
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "y",
              "raw": "\"y\"",
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 87,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "value": null,
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 64,
            "end": 91
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "z",
              "raw": "\"z\"",
              "start": 113,
              "end": 116
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 120,
              "end": 121
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 96,
            "end": 122
          }
        ],
        "start": 9,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 138,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 144
        }
      ],
      "declare": true,
      "start": 126,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 154
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 171,
              "end": 174
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 178,
              "end": 179
            },
            "computed": true,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 161,
            "end": 180
          }
        ],
        "start": 155,
        "end": 182
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 182
}
```
